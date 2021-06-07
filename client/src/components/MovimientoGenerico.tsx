import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { useToast } from "@chakra-ui/toast";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router";
import { nombresDivisa } from "../models/IAccount";
import AccountApi from "../services/AccountApi";

interface Props {
  serviceCb: (values: object) => Promise<object>;
  textValue: string;
}

const MovimientoGenerico = ({ serviceCb, textValue }: Props) => {
  function validateMinLength(value: string) {
    let error;
    if (value.length < 5) {
      error = "Debe ser por lo menos de 5 caracteres";
    }
    return error;
  }

  function validateRequired(value: string) {
    let error;
    if (value.length < 0) {
      error = "Debe seleccionar una opción";
    }
    return error;
  }

  const history = useHistory();

  const toast = useToast();
  const handleSubmit = (values: Object, actions: any) => {
    serviceCb(values).then(() => {
      actions.setSubmitting(false);
      history.push("/");

      toast({
        position: "top-right",
        duration: 1500,
        render: () => (
          <Box color="white" p={5} bg="blue.500">
            La operación fue realizada con éxito
          </Box>
        ),
      });
    });
  };
  return (
    <Formik initialValues={{ num: "", divisa: "" }} onSubmit={handleSubmit}>
      {(props) => (
        <Form>
          <Field name="num" validate={validateMinLength}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.num && form.touched.num}>
                <FormLabel htmlFor="num">{textValue}</FormLabel>
                <Input {...field} id="num" placeholder="Valor" type="number" />
                <FormErrorMessage>{form.errors.num}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="divisa" validate={validateRequired}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.num && form.touched.num}>
                <FormLabel htmlFor="divisa">Tipo de cuenta</FormLabel>
                <Select
                  placeholder="Seleccione el tipo de cuenta propia"
                  {...field}
                  id="divisa"
                >
                  {Object.keys(nombresDivisa).map((divisa: string) => (
                    <option value={divisa} key={divisa}>
                      {nombresDivisa[divisa]}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{form.errors.divisa}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default MovimientoGenerico;
