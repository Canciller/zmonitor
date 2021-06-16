sap.ui.define(
  ['sap/ui/test/Opa5', './arrangements/Startup', './NavigationJourney'],
  function (Opa5, Startup) {
    Opa5.extendConfig({
      arrangements: new Startup(),
      viewNamespace: 'helloworld.view.',
      autoWait: true,
    });
  }
);
