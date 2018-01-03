# Material Dialogs Helper Module

This is to simplify MatDialogs from @angular/material package but wrapping it in a service.

Currently it supports:
* Confirm Dialog

# Getting started

1. Import the module `MdDialogsHelperModule` to your own module
2. Inject the `MdDialogsHelperService` service
3. Call it like the following:

```
  constructor(private dialogs: MdDialogsHelperService) {}

  public openConfirmDialog() {
    this.dialogs
      .confirm('Confirm Dialog')
      .subscribe((result) => {
        /* result will be true or false depening on user clicking OK or cancelling */
      });
  }
```

