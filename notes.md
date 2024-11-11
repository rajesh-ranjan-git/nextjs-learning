# Error Handling (error.tsx)

1. Automatically wrap a route segment and its nested children in a React Error Boundary.
2. Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity.
3. Isolate errors to affected segments while keeping the rest of the application functional.
4. Add functionally to attempt tp recover from an error without a full page reload.

# Component Hierarchy

layout.js
template.js
error.js
loading.js
not-found.js
page.js

<Layout>
    <Template>
        <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
                <ErrorBoundary fallback={<NotFound />}>
                    <Page />
                </ErrorBoundary>
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>

# Recovering from error

> To handle errors create a file named error.tsx in the route where we need to handle error.
> It contains error props as well which can ne used to display message or reset the behavior by trying again.
> reset tries to attempt to rerender the ErrorBoundary's contents, if successful the fallback error content is replaced by the rerendered contents from page.tsx.

export default function ErrorBoundary ({error, reset}:
{error : Error;
reset: () => void;
}) {
return <div>contents to display...</div>
}

# Handling error within nested routes

> Errors bubble up to closest error boundary.
> An error.tsx file will cater to errors for all its nested child segments.
> By positioning error.tsx files at different levels in the nested folders of a route, you can achieve a more granular level of error handling.
> The placement of error.tsx file plays a crucial role in determining the scope of error handling allowing for more precise control over which parts of the UI are affected when error occurs.
> Deeper the placement of error.tsx, the more granular is error handling.

# Handling errors within layout

> An error.tsx file will handle errors for all its nested child segments.
> However, there is a nuance when it comes to layout.tsx component within the same segment.
> The error boundary does not catch errors thrown here because its nested inside the layouts component.
> This is because the Layout sits above ErrorBoundary in the component's hierarchy.
> To handle this we need to place the error up the hierarchy to warp the route within ErrorBoundary.
> The placement of error.tsx plays to pivotal role in managing errors within segments of our application.

# Parallel Routes

> Parallel Routes are an advanced routing mechanism that allows for the simultaneous rendering of multiple pages within the same layout.
> Traditionally we create different components and then include them in the layout.tsx file.
> This same outcome can be achieved through parallel routes with same additional benefits.
> Parallel routes in Next.js are defined using feature known as slots.
> Slots help structure our content in a modular fashion.
> To define a slot, we use the `@folder` naming convention.
> Each slot is then passed as a prop to its corresponding `layout.tsx` file.
> The `@folder` is not available as routes and it only accessible from layout.jsx, if we try to access it will route to error page.
> The children will act as complexDashboard/@children/page.tsx which is also a slot.

# Parallel Routes Benefits

> A clear benefit of parallel routes is their ability to split a single layout into various slots, making the code more manageable.
> This is useful when multiple people are working on the same project.
> This benefit is also applicable to traditional method.
> True benefit of parallel routes lies with :

1. Independent route handling
2. Sub-navigation

> Independent route handling

1. Each slot of your layout, such as user analytics or revenue analytics metrics, can have its own loading and error states.
2. This granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors.
   E.g. If the user analytics is taking longer to load, we can display its own loader while other metrics will remain interactive, same goes for error as well, we can show error message in that specific section while others don't have any effect on them.
   > This not only enhances user experience but also simplifies in debugging and maintenance.

> Sub-navigation

1. Each slot of your dashboard can essentially function as a mini-application, complete its own navigation and state management.
2. This is especially useful in a complex application such as our dashboard where different sections serve distinct purposes.
3. Users can interact with each sections independently applying filters, sorting data, navigating through pages without affecting the state or displays of other section.
4. This approach allows for a more dynamic and interactive user experience as users can navigate through different parts of the application without unnecessary page reloads and layout shifts.

> Unmatched Routes

=> Navigation from the UI

1. In the case of navigation within the UI, Next.js retains the previously active state of slot regardless of changes in the URL.
2. Other slots will still display the same content regardless of the route in the notifications slot changes.

=> Page reload

1. Next.js immediately searches for a default.tsx file within each unmatched slot.
2. The presence of this file is critical, as it provides the default content that Next.js will render in the user interface.
3. If this default.tsx file is missing in any of the unmatched slots for the current route, Next.js will render a 404 error.

=> default.tsx

1. The `default.tsx` file in Next.js serves as a fallback to render content when the framework cannot retrieve a slot's active state from the current URL (E.g after page reload).
2. You have complete freedom to define the UI for unmatched routes: you can either mirror the content found in page.tsx or craft an entirely custom view.
3. The Notifications slot will display it specific content from archived sub-folder as this is the only one with a component defined for /archived route. The other slots will display the content from their respective default.tsx file which acts as fallbacks for routes without specific content.
4. This approach ensure that you don't accidentally render the route which shouldn't be parallel rendered.

# Conditional Routes

> Parallel routes offers a way to implement conditional routing.
