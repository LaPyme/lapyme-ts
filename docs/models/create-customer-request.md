# CreateCustomerRequest

## Example Usage

```typescript
import { CreateCustomerRequest } from "lapyme/models";

let value: CreateCustomerRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | Razón social o nombre del cliente                          |
| `email`                                                    | *string*                                                   | :heavy_minus_sign:                                         | Email del cliente                                          |
| `phone`                                                    | *string*                                                   | :heavy_minus_sign:                                         | Teléfono del cliente                                       |
| `taxId`                                                    | *string*                                                   | :heavy_minus_sign:                                         | Número de documento (CUIT/CUIL/DNI sin guiones)            |
| `taxIdType`                                                | [models.TaxIdType](../models/tax-id-type.md)               | :heavy_minus_sign:                                         | Tipo de documento                                          |
| `taxCategory`                                              | [models.TaxCategory](../models/tax-category.md)            | :heavy_minus_sign:                                         | Categoría fiscal                                           |
| `personType`                                               | [models.PersonType](../models/person-type.md)              | :heavy_minus_sign:                                         | Tipo de persona                                            |
| `country`                                                  | *string*                                                   | :heavy_minus_sign:                                         | País                                                       |
| `province`                                                 | *string*                                                   | :heavy_minus_sign:                                         | Código de provincia (se enviará el nombre en la respuesta) |
| `city`                                                     | *string*                                                   | :heavy_minus_sign:                                         | Ciudad                                                     |
| `address`                                                  | *string*                                                   | :heavy_minus_sign:                                         | Dirección                                                  |
| `apartment`                                                | *string*                                                   | :heavy_minus_sign:                                         | Departamento/Piso                                          |
| `postalCode`                                               | *string*                                                   | :heavy_minus_sign:                                         | Código postal                                              |