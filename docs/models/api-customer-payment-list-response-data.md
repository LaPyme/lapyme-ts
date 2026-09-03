# ApiCustomerPaymentListResponseData

## Example Usage

```typescript
import { ApiCustomerPaymentListResponseData } from "lapyme/models";

let value: ApiCustomerPaymentListResponseData = {
  id: "7f5bf096-3026-4abb-9a2f-ccc9a10c0ea6",
  paymentDate: "<value>",
  amount: 770493,
  balance: 19905,
  formattedPaymentNumber: "<value>",
  currency: "USD",
  paymentMethod: {
    id: "aba4ddb3-f142-4a77-aa1a-78e411d96988",
    name: "<value>",
    icon: null,
  },
  paymentMethodCount: 434308,
  relatedEntity: {
    id: "8d325324-c481-41d3-9060-3a7395327437",
    name: "<value>",
    number: "<value>",
    saleId: "a16db801-a12f-4f07-8d28-a8df4ab55228",
  },
  createdBy: {
    id: "45dcd06d-e9c1-4a23-a20c-e9397ac2a786",
    name: "<value>",
  },
  createdAt: new Date("2025-05-13T03:12:33.949Z"),
  createdAtCursor: "<value>",
  updatedAt: new Date("2025-02-15T07:51:36.100Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paymentDate`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balance`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `formattedPaymentNumber`                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paymentMethod`                                                                               | [models.ApiSharedObject78bf4093ef](../models/api-shared-object78bf4093ef.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paymentMethodCount`                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `relatedEntity`                                                                               | [models.ApiSharedObjectf442c4288c](../models/api-shared-objectf442c4288c.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | [models.ApiSharedObject0fb80a7625](../models/api-shared-object0fb80a7625.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAtCursor`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |