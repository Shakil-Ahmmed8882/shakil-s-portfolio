# cmd-provider — Context & Provider Rules

> Referenced by `cmd-ui` when shared state is needed across distant components.
> Uses `use-context-selector` to prevent unnecessary re-renders.

---

## WHEN TO CREATE A PROVIDER

Only introduce a provider when ALL of the following are true:

- ✅ State is shared across **2+ components in different branches**
- ✅ Passing it via props would require **2+ levels of drilling**
- ✅ The state is scoped to a **specific feature**, not the whole app

If only one component needs the state → keep it local with `useState`.

---

## FILE STRUCTURE

Each provider is a **folder**, not a single file:

```
/FeatureName
  FeatureNameContext.tsx        ← context + provider + selector hook (wiring only)
  useFeatureNameContextHelper.ts  ← all logic (the hook passed into the provider)
```

---

## HOW TO DEFINE — STEP BY STEP

### Step 1 — Write the logic hook (`useFeatureNameContextHelper.ts`)

This hook contains ALL the logic. The provider just calls it.

```ts
"use client";

export const useFeatureNameContextHelper = () => {
	// all state, API calls, handlers go here

	return {
		/* everything consumers need */
	};
};
```

---

### Step 2 — Wire context + provider + selector (`FeatureNameContext.tsx`)

> Replace `FeatureName` / `featureName` with the actual name from the prompt.
> The logic hook is always named `useFeatureNameContextHelper`.

```tsx
"use client";

import { makeSelectorContext } from "@/modules/shared/context/makeSelectorContext";
import { useContextSelector } from "@/modules/shared/context/useSelectorContext";
import { useFeatureNameContextHelper } from "./useFeatureNameContextHelper";
import { TCommonProps } from "@/types/global.type";

// 1. Infer type from the helper hook — never write it manually
type TFeatureName = ReturnType<typeof useFeatureNameContextHelper>;

// 2. Create context + base provider via shared factory
export const { Context, Provider } = makeSelectorContext<TFeatureName>("FeatureName");

// 3. Provider — calls the helper hook, nothing else
export const FeatureNameProvider = ({ children }: TCommonProps) => {
	return <Provider value={useFeatureNameContextHelper()}>{children}</Provider>;
};

// 4. Selector hook — only expose what consumers actually need
//    Add/remove fields based on what useFeatureNameContextHelper returns
export const useFeatureNameSelector = () => ({
	exampleValue: useContextSelector(Context, "FeatureName", (s) => s.exampleValue),
	exampleAction: useContextSelector(Context, "FeatureName", (s) => s.exampleAction),
});
```

**Real example (Signin):**

```tsx
"use client";

import { makeSelectorContext } from "@/modules/shared/context/makeSelectorContext";
import { useContextSelector } from "@/modules/shared/context/useSelectorContext";
import { useSigninContextHelper } from "./useSigninContextHelper";
import { TCommonProps } from "@/types/global.type";

type TSignin = ReturnType<typeof useSigninContextHelper>;

export const { Context, Provider } = makeSelectorContext<TSignin>("Signin");

export const SigninProvider = ({ children }: TCommonProps) => {
	return <Provider value={useSigninContextHelper()}>{children}</Provider>;
};

export const useSigninSelector = () => ({
	formik: useContextSelector(Context, "Signin", (s) => s.formik),
	isLoading: useContextSelector(Context, "Signin", (s) => s.isLoading),
	setRememberMe: useContextSelector(Context, "Signin", (s) => s.setRememberMe),
	rememberMe: useContextSelector(Context, "Signin", (s) => s.rememberMe),
});
```

---

## SCOPING RULE (CRITICAL)

Scope the provider to the **smallest possible subtree** that needs it.

```tsx
// ❌ Bad — wraps unrelated parts of the app
export function AppLayout() {
	return (
		<FeatureNameProvider>
			<Navbar />
			<Sidebar />
			<FeatureSection />
		</FeatureNameProvider>
	);
}

// ✅ Good — scoped only to what needs it
export function FeatureHomeLayout() {
	return (
		<>
			<Navbar />
			<FeatureNameProvider>
				<FeatureFilterBar />
				<FeatureListSection />
			</FeatureNameProvider>
		</>
	);
}
```

---

## NAMING CONVENTIONS

| Piece                 | Pattern                       | Example                          |
| --------------------- | ----------------------------- | -------------------------------- |
| Logic hook            | `useFeatureNameContextHelper` | `useSigninContextHelper`         |
| Context file          | `FeatureNameContext.tsx`      | `SigninContext.tsx`              |
| Provider component    | `FeatureNameProvider`         | `SigninProvider`                 |
| Selector hook         | `useFeatureNameSelector`      | `useSigninSelector`              |
| Context/Provider pair | from `makeSelectorContext`    | `makeSelectorContext<T>('Name')` |

---

## WHAT TO AVOID

| ❌ Avoid                                 | ✅ Do Instead                              |
| ---------------------------------------- | ------------------------------------------ |
| Logic inside `FeatureNameContext.tsx`    | Put all logic in `useFeatureNameHelper`    |
| Manual context type definitions          | Use `ReturnType<typeof useHook>`           |
| `useContext` directly in components      | Always go through `useFeatureNameSelector` |
| Global providers for local state         | Scope to smallest subtree                  |
| Multiple unrelated states in one context | One context per feature                    |
