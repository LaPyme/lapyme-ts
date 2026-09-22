# ApiCustomerMutationRequest

## Example Usage

```typescript
import { ApiCustomerMutationRequest } from "lapyme/models";

let value: ApiCustomerMutationRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `companyName`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `email`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `phone`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `taxId`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | Documento sin guiones, o "0" cuando tax_id_type es "Otro"                |
| `taxIdType`                                                              | [models.ApiSharedEnumcb6fc950ce](../models/api-shared-enumcb6fc950ce.md) | :heavy_minus_sign:                                                       | "Otro" requiere tax_id="0" y categoría efectiva Consumidor Final         |
| `taxCategory`                                                            | [models.ApiSharedEnumbb2864ecea](../models/api-shared-enumbb2864ecea.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `country`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `province`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `city`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `address`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `apartment`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `postalCode`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `deliveryCarrier`                                                        | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `deliveryAddress`                                                        | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `assignedSalespersonId`                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `defaultPriceListId`                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `paymentTermId`                                                          | [models.ApiSharedEnumd34af90520](../models/api-shared-enumd34af90520.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `paymentTermDays`                                                        | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `isActive`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |