import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Heading } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { useToast } from "@chakra-ui/toast";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router";
import { nombresDivisa } from "../models/IAccount";
import AccountApi, { OperacionReturn } from "../services/AccountApi";

const Transferencia = () => {
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
    AccountApi.transfer(values).then((data: OperacionReturn) => {
      actions.setSubmitting(false);
      if (data.success) {
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
      } else {
        toast({
          position: "top-right",
          duration: 1500,
          render: () => (
            <Box color="white" p={5} bg="red.500">
              {data.error}
            </Box>
          ),
        });
      }
    });
  };
  return (
    <Formik
      initialValues={{
        num: "",
        divisaFrom: "",
        divisaTo: "",
        id_unicoFrom: "",
        id_unicoTo: "",
      }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form>
          <Box
            p="2"
            mb="2"
            border="1px solid #ddd"
            bg="#fafafa"
            borderRadius="xl"
          >
            <Heading as="h4" size="md">
              Monto a transferir
            </Heading>
            <Field name="num" validate={validateMinLength}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.num && form.touched.num}>
                  <Input
                    {...field}
                    id="num"
                    placeholder="Valor"
                    type="number"
                  />
                  <FormErrorMessage>{form.errors.num}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Box>
          <Box
            p="2"
            mb="2"
            border="1px solid #ddd"
            bg="#fafafa"
            borderRadius="xl"
          >
            <Heading as="h4" size="md">
              Desde
            </Heading>
            <Box p="2">
              <Field name="divisaFrom" validate={validateRequired}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.num && form.touched.num}>
                    <FormLabel htmlFor="divisaFrom">Tipo de cuenta</FormLabel>
                    <Select
                      placeholder="Seleccione el tipo de cuenta propia"
                      {...field}
                      id="divisaFrom"
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
            </Box>
            <Box p="2">
              <Field name="id_unicoFrom" validate={validateMinLength}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.id_unicoFrom && form.touched.id_unicoFrom
                    }
                  >
                    <FormLabel htmlFor="id_unicoFrom">UUID o CBU</FormLabel>
                    <Input
                      {...field}
                      id="id_unicoFrom"
                      placeholder="Valor"
                      type="number"
                    />
                    <FormErrorMessage>
                      {form.errors.id_unicoFrom}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Box>
          </Box>
          <Box
            p="2"
            mb="2"
            border="1px solid #ddd"
            bg="#fafafa"
            borderRadius="xl"
          >
            <Heading as="h4" size="md">
              Hasta
            </Heading>
            <Box p="2">
              <Field name="divisaTo" validate={validateRequired}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.num && form.touched.num}>
                    <FormLabel htmlFor="divisaTo">Tipo de cuenta(to)</FormLabel>
                    <Select
                      placeholder="Seleccione el tipo de cuenta propia"
                      {...field}
                      id="divisaTo"
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
            </Box>
            <Box p="2">
              <Field name="id_unicoTo" validate={validateMinLength}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.id_unicoTo && form.touched.id_unicoTo
                    }
                  >
                    <FormLabel htmlFor="id_unicoTo">
                      Ingrese el numero de cuenta única(UUID o CBU)
                    </FormLabel>
                    <Input
                      {...field}
                      id="id_unicoTo"
                      placeholder="Valor"
                      type="number"
                    />
                    <FormErrorMessage>
                      {form.errors.id_unicoTo}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Box>
          </Box>
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
export default Transferencia;
