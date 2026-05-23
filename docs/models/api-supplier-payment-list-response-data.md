# ApiSupplierPaymentListResponseData

## Example Usage

```typescript
import { ApiSupplierPaymentListResponseData } from "lapyme/models";

let value: ApiSupplierPaymentListResponseData = {
  id: "02b30abb-37c0-43d0-aaea-21a3f3488182",
  paymentDate: "<value>",
  amount: 736249,
  balance: 308648,
  formattedPaymentNumber: "<value>",
  currency: "DOL",
  paymentMethod: {
    id: "aba4ddb3-f142-4a77-aa1a-78e411d96988",
    name: "<value>",
    icon: null,
  },
  paymentMethodCount: 845259,
  relatedEntity: {
    id: "f55c9b7b-03e9-4d6d-82b7-cb8a01dcdb83",
    name: "<value>",
    number: "<value>",
  },
  createdBy: {
    id: "45dcd06d-e9c1-4a23-a20c-e9397ac2a786",
    name: "<value>",
  },
  createdAt: new Date("2025-03-28T18:29:47.352Z"),
  createdAtCursor: "<value>",
  updatedAt: new Date("2026-10-17T11:03:05.504Z"),
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
| `currency`                                                                                    | [models.ApiSharedEnum6cfb146157](../models/api-shared-enum6cfb146157.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paymentMethod`                                                                               | [models.ApiSharedObject78bf4093ef](../models/api-shared-object78bf4093ef.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paymentMethodCount`                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `relatedEntity`                                                                               | [models.ApiSharedObject2a73ed97c3](../models/api-shared-object2a73ed97c3.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | [models.ApiSharedObject0fb80a7625](../models/api-shared-object0fb80a7625.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAtCursor`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `purchaseCount`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |