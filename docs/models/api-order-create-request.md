# ApiOrderCreateRequest

## Example Usage

```typescript
import { ApiOrderCreateRequest } from "lapyme/models";

let value: ApiOrderCreateRequest = {
  customerId: "06000f3b-0845-49c3-821b-43f95c2b13bb",
  assignedWarehouseId: "9da3d84c-9f3b-4a71-aae4-44f0b96d18dc",
  totals: {
    subtotal: 952188,
    taxAmount: 313632,
    total: 784735,
  },
  lines: [],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `customerId`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `assignedWarehouseId`                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `deliveryMethod`                                                                                    | [models.ApiOrderCreateRequestDeliveryMethod](../models/api-order-create-request-delivery-method.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `orderDate`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `currency`                                                                                          | [models.ApiOrderCreateRequestCurrency](../models/api-order-create-request-currency.md)              | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `notes`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `discountAmount`                                                                                    | *number*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `totals`                                                                                            | [models.Totals](../models/totals.md)                                                                | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `lines`                                                                                             | [models.ApiOrderCreateRequestLine](../models/api-order-create-request-line.md)[]                    | :heavy_check_mark:                                                                                  | N/A                                                                                                 |