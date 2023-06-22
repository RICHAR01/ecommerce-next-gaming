import * as Yup from "yup";

export function initialValues(adress) {
  return {
    title: adress?.title || "",
    name: adress?.name || "",
    adress: adress?.adress || "",
    city: adress?.city || "",
    state: adress?.state || "",
    postal_code: adress?.postal_code || "",
    phone: adress?.phone || "",
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required(true),
    name: Yup.string().required(true),
    adress: Yup.string().required(true),
    city: Yup.string().required(true),
    state: Yup.string().required(true),
    postal_code: Yup.string().required(true),
    phone: Yup.number().required(true),
  });
}
