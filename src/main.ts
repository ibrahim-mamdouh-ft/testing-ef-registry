import("ef-runtime-client").then(({ init: EFRuntimeInit }) => {
  EFRuntimeInit({
    efFlag: "staging",
    systemCode: "next-article",
  });
});
