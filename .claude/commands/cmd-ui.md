    # cmd:ui — React Component Architecture Rules

    You are generating a React component using TypeScript in a scalable, production-level architecture.

    > If this UI requires shared state → follow `cmd-provider`
    > If this UI requires logic/side effects → follow `cmd-hooks`

    ---

    ## 1. TYPE SAFETY

    - Define a separate `Props` type **above** the component
    - NEVER inline types in function parameters
    - Use `props: Props` and destructure **inside** the function body

    ```tsx
    type Props = {
    	title: string;
    	isOpen: boolean;
    };

    export function MyComponent(props: Props) {
    	const { title, isOpen } = props;
    }
    ```

    ---

    ## 2. COMPONENT LAYERS

    You must follow this 3-layer hierarchy strictly:

    ### A. Parent Layout (Page-Level)

    - Composes sections and wraps providers
    - MUST NOT contain business logic or UI complexity
    - Providers are wrapped here ONLY when needed (see `cmd:provider`)

    ```tsx
    export function EventHomeLayout() {
    	return (
    		<EventsHomeProvider>
    			<TopSection />
    			<HeaderSection />
    			<EventListSection />
    		</EventsHomeProvider>
    	);
    }
    ```

    ### B. Section Layout (Group-Level)

    - Groups 2–4 related components
    - Handles layout: flex, spacing, alignment
    - NO heavy logic, NO API calls

    ```tsx
    export function EventHeadingLayout() {
    	return (
    		<header className="flex items-center justify-between">
    			<EventsNavigationTabs />
    			<CreateEventButton />
    		</header>
    	);
    }
    ```

    ### C. Leaf Components

    - Small, focused, single-responsibility
    - Handles UI or isolated logic only
    - No unnecessary dependencies

    ---

    ## 3. CONDITIONAL RENDERING

    - ❌ NO nested ternary operators
    - ❌ NO complex inline conditions in JSX
    - ✅ Use early returns
    - ✅ Extract conditions into variables or functions

    ```tsx
    // ❌ Bad
    return <div>{isLoading ? <Spinner /> : hasData ? <List /> : <Empty />}</div>;

    // ✅ Good
    if (isLoading) return <Spinner />;
    if (!hasData) return <Empty />;
    return <List />;
    ```

    ---

    ## 4. COMPONENT STRUCTURE

    - Named function components only
    - Destructure props at the top of the function body
    - Keep JSX clean and minimal
    - Avoid deeply nested JSX — extract into child components

    ---

    ## 5. WHAT TO AVOID

    | ❌ Avoid                 | ✅ Do Instead                      |
    | ------------------------ | ---------------------------------- |
    | Inline prop types        | Separate `Props` type              |
    | Nested ternary logic     | Early returns                      |
    | Prop drilling 2+ levels  | Use `cmd:provider`                 |
    | Business logic in layout | Move to `cmd:hooks`                |
    | Giant components         | Split into layers                  |
    | Over-wrapping providers  | Scope tightly (see `cmd:provider`) |

    ## 6. Don't mess up unnecessarily

    		<SingleShiftScheduleModal
    					isOpen={shiftModal.isOpen}
    					onOpenChange={shiftModal.handleOpenChange}
    					date={shiftModal.selectedShift.date}
    					form={shiftModal.form}
    					onUpdateField={shiftModal.updateField}
    					onPrevDay={shiftModal.prevDay}
    					onNextDay={shiftModal.nextDay}
    					disablePrev={!shiftModal.canPrevDay}
    					disableNext={!shiftModal.canNextDay}
    					onSave={shiftModal.handleSave}
    					saving={shiftModal.saving}
    				/>

    				Instead of above unnecessary propps by listing from one sourcy
    						<SingleShiftScheduleModal staffModal={staffModel}/>
    						then destructure them
