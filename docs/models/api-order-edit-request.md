# ApiOrderEditRequest

## Example Usage

```typescript
import { ApiOrderEditRequest } from "lapyme/models";

let value: ApiOrderEditRequest = {
  assignedWarehouseId: "80547796-cc7c-4446-ae3a-4acd32b82ae1",
  lines: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `priceListId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `assignedWarehouseId`                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deliveryMethod`                                                                              | [models.ApiSharedEnumcc76b6d63a](../models/api-shared-enumcc76b6d63a.md)                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expectedUpdatedAt`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `orderDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `taxInclusive`                                                                                | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `discountAmount`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lines`                                                                                       | [models.ApiOrderEditRequestLine](../models/api-order-edit-request-line.md)[]                  | :heavy_check_mark:                                                                            | N/A                                                                                           |