# Material Dialogs Helper Module

This is to simplify MatDialogs from @angular/material package but wrapping it in a service.

Currently it supports:
* Confirm Dialog

# Getting started

1. Install from npm `npm i md-dialogs -s`
2. Import the module `MdDialogsHelperModule` to your own module

```
  import { MdDialogsHelperModule } from 'md-dialogs';

  @NgModule({
    declarations: [
      ...
    ],
    imports: [
      ...
      MdDialogsHelperModule,
    ]
  })
  export class AppModule { }

```

3. Inject the `MdDialogsHelperService` service
4. Call it like the following:

```
  import { MdDialogsHelperService } from 'md-dialogs';
```

```
  constructor(private dialogs: MdDialogsHelperService) {}

  public openConfirmDialog() {
    this.dialogs
      .confirm('Confirm Dialog')
      .subscribe((result) => {
        /*
          result will be true or false
          depending on user clicking OK or cancelling
        */
      });
  }
```

