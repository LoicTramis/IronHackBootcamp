# Good habit builder

## Logic

### Create a group habit

- set up a goal (multiple habits)
- set up a deadline (for all habits)
- set up a frequency (for each habits)
- change title
- change description

### Social part

You can create a group habit (you become admin of that group)  
You can join a group  
You can participate in a habit

## Interesting technical stuff

### Typescript

Creating a type for the props of HabitContent component.

```ts
    type HabitContentProps = {
        _id: string,
        description: string,
        difficulty: string,
        frequency: string,
        members: User[],
        creator: User,
        startDate: Date,
        endDate: Date,
        monthNames: string[],
        handleJoin: () => void,
        handleLeave: () => void,
        handleEdit: () => void,
        handleDelete: () => void,
    }
```

Casting HTMLElement into HTMLInputElement to pass TS validation for the .name and .value of HTMLElement.

```ts
    const name = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;
```

## Style

- CSS: TailwindCSS
- Fonts: Nunito sans

## Deployment

- Front-end hosted with [Netlify](https://habit-builder.netlify.app)
- Back-end hosted with [Render](https://habit-builder-server.onrender.com)
- Database hosted with [MongoDB Atlas](https://cloud.mongodb.com/)

## Configuration

### Formatting

- [Prettier](https://prettier.io/docs/en/options)
- [Prettier for TailwindCss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
