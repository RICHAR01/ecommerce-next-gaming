import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { Adress } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./AdressForm.form";

const adressCtrl = new Adress();

export function AdressForm(props) {
  const { onClose, onReload, adressId, adress } = props;
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(adress),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (adressId) {
          await adressCtrl.update(formValue, adressId);
        } else {
          await adressCtrl.create(formValue, user.id);
        }

        formik.handleReset();
        onReload();
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="title"
        placeholder="Titulo de la direccion"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      ></Form.Input>

      <Form.Group widths="equal">
        <Form.Input
          name="name"
          placeholder="Nombre y apellido"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        ></Form.Input>
        <Form.Input
          name="adress"
          placeholder="Dirección"
          value={formik.values.adress}
          onChange={formik.handleChange}
          error={formik.errors.adress}
        ></Form.Input>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="state"
          placeholder="Estado"
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.errors.state}
        ></Form.Input>
        <Form.Input
          name="city"
          placeholder="Ciudad"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.errors.city}
        ></Form.Input>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="postal_code"
          placeholder="Codigo postal"
          value={formik.values.postal_code}
          onChange={formik.handleChange}
          error={formik.errors.postal_code}
        ></Form.Input>
        <Form.Input
          name="phone"
          placeholder="Telefono"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        ></Form.Input>
      </Form.Group>

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Enviar
      </Form.Button>
    </Form>
  );
}
