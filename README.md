# ngx-range 

## Description

Range component that can be used with 'Reactive Forms' or 'Templative Driven Forms'.
This component basis on Angular Material component.

## How to use?

1. Be sure to install peer-dependencies:
- `ng add @angular/material`

2. Import `NgxRangeModule` into the `app.module.ts`.

3. Use it in the template:

- Template driven: `<ngx-range name="priceRange" label="Price range" [(ngModel)]="priceRangeValue" [selectOptions]="ranges">
- Reactive forms: `<ngx-range label="Score range" formControlName="range4" [selectOptions]="ranges"></ngx-range>`

4. Interface `selectOptions`: `type selectOptions = { firstOptions: [{ value: unknown, name: string }], secondOptions: [{ value: unknown, name: string }] };``
5. Interface `value`: `type selectValues = { selectFirst: unknown, selectSecond: unknown };`

## Playground

[ngx-range](/projects/playground/src/assets/ngx-range.png)

# Contribution

## NgxRangeWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
