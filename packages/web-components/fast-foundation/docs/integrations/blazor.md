---
id: blazor
title: Blazor
sidebar_label: Blazor
custom_edit_url: https://github.com/microsoft/fast/edit/master/packages/web-components/fast-foundation/docs/integrations/blazor.md
---

FAST works seamlessly with Blazor, including integration with Blazor's binding engine and components. Let's take a look at how to set things up.

## Setting up the Blazor project

First, you'll need to make sure that you have the .NET SDK installed. You can learn more and download that [on the official site](https://dotnet.microsoft.com/download).

With the SDK installed, you have access to the `dotnet` command-line interface. This can be used to create a new Blazor project. For example, to create a new Blazor App named "fast-blazor", you would use the following command:

```shell
dotnet new blazorwasm -o fast-blazor
```

Create a project using the command above if you don't already have one. When the CLI completes, you should have a basic runnable Blazor application. For more information on setting up and using Blazor, [see the official Blazor Getting Started guide](https://docs.microsoft.com/en-us/aspnet/core/blazor/get-started).

## Configuring scripts

Now that we've got our basic project setup, we need to add our web components script and update Blazor accordingly. You can either add the script from our CDN directly, or you can install it with NPM and then add that.

To add a CDN script for `fast-components` use the following markup:

```html
<script type="module" src="https://unpkg.com/@microsoft/fast-components"></script>
```

The best place to put this is typically in your `index.html` file in the script section at the bottom of the `<body>`.

:::note
If you are setting up FAST on a Blazor Server project, you will need to escape the `@` character by repeating it in the source link. For more information check out the [Razor Pages syntax documentation](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/razor#razor-syntax).
:::

If you wish to leverage NPM instead, run the following command:

```shell
npm install --save @microsoft/fast-components
```

You can locate the single file script build in the following location:

```shell
node_modules/@microsoft/fast-components/dist/fast-components.min.js
```

Copy this to your `wwwroot/script` folder and reference it with a script tag as described above.

## Using the components

With your script tag added, you can use any component in any of your views. For example, you could put something like this in your `Index.razor` file:

```html
@page "/"

<fast-card>
  <h2>Hello World!</h2>
  <fast-button appearance="accent">Click Me</fast-button>
</fast-card>
```

For a splash of style, add the following to your `wwwroot/css/app.css` file:

```css
fast-card {
  padding: 16px;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: var(--type-ramp-plus-5-font-size);
  line-height: var(--type-ramp-plus-5-line-height);
}

fast-card > fast-button {
  align-self: flex-end;
}
```

If you are using the .NET CLI, you can run your project with the following command from the project folder:

```shell
dotnet watch run
```

Congratulations! You're now set up to use FAST with Blazor!

## Using the FluentUI Web Components

FAST has special Blazor support for Microsoft's FluentUI Web Components. To leverage the FluentUI Design System, you'll need to make a few modifications to your project.

First, update the script tag to point to the FluentUI Web Components.

```html
<script type="module" src="https://unpkg.com/@fluentui/web-components"></script>
```

Second, change the `fast-` prefix to `fluent-` in any CSS selectors.

Third, you will want to install [the official Nuget package for FluentUI](https://www.nuget.org/packages/Microsoft.Fast.Components.FluentUI/). You can use the following command:

```shell
dotnet add package Microsoft.Fast.Components.FluentUI
```

With this package installed, you can switch the HTML over to Blazor components. Here's an example:

```html
@page "/"
@using Microsoft.Fast.Components.FluentUI

<FluentCard>
  <h2>Hello World!</h2>
  <FluentButton Appearance="@Appearance.Accent">
    Click Me
  </FluentButton>
</FluentCard>
```

To report issues or provide feedback on `Microsoft.Fast.Components.FluentUI`, please visit [the microsoft/fast-blazor repository](https://github.com/microsoft/fast-blazor).