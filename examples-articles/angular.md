# Angular

> This example will show you how to link a simple Angular frontend blog template to a Directus Project with a simple SQLite database containing a few blog posts.

![Directus and React Example Blog](angular-example-blog-20220207A.webp)

[[toc]]

## Scope and Purpose

The purpose of this article is to focus on the bare basics of linking an Angular frontend to Directus, then show you where to learn about more robust authentication methods, roles & permissions configurations, and API functionalities. It is important to stress to new users that Directus is a general purpose database wrapper, _which mirrors any linked database_. No matter your data model or use-case, Directus can serve as a backend *(plus no-code admin panel)* for any type of project and also connect to any *(or many)* different front-ends.

Please keep in mind that this is not a demo showing _what Directus can be used for_, but rather a low variable entry-point on the path to _understanding how to do anything you want with it_.

::: warning Demonstration purposes only

 This example was created for demonstration purposes and is not intended to be production ready, but PRs that address this and any other issues are always welcome! See [Contribution Guidelines](https://docs.directus.io/contributing/introduction/).

:::


## Setup

1. Clone the [examples repo](https://github.com/directus/examples).

::: warning Don't move the directories

Every frontend template in the `examples` repo references the `shared` folder. So moving these directories around from one location to another could break the relative file path.

:::

2. From that repo, setup the [provided Directus instance](https://github.com/directus/examples/tree/main/directus) and get it running. Instructions are on the `README.md` page.

3. Install dependencies for this example.

```
cd angular
npm install
```

4. Start the development server.

```
npm start
```

5. Your Directus Angular example is now running at <http://localhost:4200/>.

Now that you have the frontend and backend linked up, let's touch on what's happening in this project and where to find more sophisticated options.

## Angular

Angular is a library primarily for building [Single-page Applications](https://angular.io/) (SPAs). [Angular Universal](https://angular.io/guide/universal) _(which is not used in this example)_ is a technology that enables Server-side Rendering (SSR) as well as prerendering.

## Authentication

Aside from the default `local` authentication mechanism, Directus also supports SSO through `oauth2`, `openid`, and `ldap`. Learn more about SSO options [here](https://docs.directus.io/configuration/config-options/#authentication) or follow the guide [here](https://docs.directus.io/configuration/sso/) for detailed instructions.

## Users, Roles and Permissions

![Directus Permissions](roles-and-permissions-20220204A.webp)

For simplicity's sake, this Directus instance provided has [Public read permissions](https://docs.directus.io/getting-started/quickstart/#_6-set-role-public-permissions) activated for `articles` and `directus_users`. Find Permissions in your local Directus instance under `Settings > Roles and Permissions` or follow this [link](http://localhost:8055/admin/settings/roles/public).

Additionally, any number of Roles can be created and fully configured. Permissions are completely granular. Learn more [here](https://docs.directus.io/configuration/users-roles-permissions/).

## APIs

There are two simple requests in this example worth noting. The first is in `home.component.ts` [here](https://github.com/directus/examples/blob/main/angular/src/app/pages/home/home.component.ts) and the other in `article.component.ts` [here](https://github.com/directus/examples/blob/main/angular/src/app/pages/article/article.component.ts). However, the Directus API is exhaustive for any database linked.

Directus uses [Database Mirroring](https://docs.directus.io/getting-started/introduction/#database-mirroring) to dynamically generate REST endpoints and a GraphQL schema based on the connected database's architecture. This means the REST and the GraphQL APIs _will both fit any project with any database schema, out of the box_. Learn more in the [API Reference](https://docs.directus.io/reference/introduction/).

## More Help

Looking for technical support for your non-enterprise project? Please visit the [Directus Discord Community](https://directus.chat/).

Want to stay focused on your content and apps? Let Directus manage the platform with our [Directus Cloud service](https://directus.io/pricing/) or [contact our team](https://directus.io/contact/).
