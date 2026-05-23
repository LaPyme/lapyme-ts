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
    id: "dff55c9b-7b03-4e9d-a6d2-b7cb8a01dcdb",
    name: "<value>",
    icon: "<value>",
  },
  paymentMethodCount: 135577,
  relatedEntity: {
    id: "ac6e26a7-4e12-4b11-bf89-a8855b6f5b90",
    name: "<value>",
    number: "<value>",
  },
  createdBy: {
    id: "37bcddaa-a105-4cd0-8307-e3a8323d3f24",
    name: "<value>",
  },
  createdAt: new Date("2024-03-03T21:15:41.724Z"),
  createdAtCursor: "<value>",
  updatedAt: new Date("2025-05-25T13:44:33.882Z"),
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `paymentDate`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `amount`                                                                                                             | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `balance`                                                                                                            | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `formattedPaymentNumber`                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `currency`                                                                                                           | [models.ApiSupplierPaymentListResponseCurrency](../models/api-supplier-payment-list-response-currency.md)            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `paymentMethod`                                                                                                      | [models.ApiSupplierPaymentListResponsePaymentMethod](../models/api-supplier-payment-list-response-payment-method.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `paymentMethodCount`                                                                                                 | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `relatedEntity`                                                                                                      | [models.ApiSupplierPaymentListResponseRelatedEntity](../models/api-supplier-payment-list-response-related-entity.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdBy`                                                                                                          | [models.ApiSupplierPaymentListResponseCreatedBy](../models/api-supplier-payment-list-response-created-by.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAtCursor`                                                                                                    | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `updatedAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `purchaseCount`                                                                                                      | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |