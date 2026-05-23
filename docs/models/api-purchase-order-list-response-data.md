# ApiPurchaseOrderListResponseData

## Example Usage

```typescript
import { ApiPurchaseOrderListResponseData } from "lapyme/models";

let value: ApiPurchaseOrderListResponseData = {
  object: "purchase_order",
  id: "5ce8915c-8e19-48af-af9b-e1f0e6b9f626",
  orderNumber: 752804,
  formattedOrderNumber: "<value>",
  status: "cancelled",
  orderDate: new Date("2025-04-23"),
  expectedDate: new Date("2026-07-23"),
  currency: "Solomon Islands Dollar",
  supplier: {
    id: "f4e712e3-5eee-48c0-94d7-da0d0822a24a",
    name: "<value>",
  },
  warehouse: {
    id: "73701df9-cc25-4f39-89d3-0ecc1c8cf71d",
    name: "<value>",
  },
  createdAt: new Date("2025-09-24T08:29:13.102Z"),
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                | *"purchase_order"*                                                                                      | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `orderNumber`                                                                                           | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `formattedOrderNumber`                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `status`                                                                                                | [models.ApiPurchaseOrderListResponseStatus](../models/api-purchase-order-list-response-status.md)       | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `orderDate`                                                                                             | [Date](../types/rfcdate.md)                                                                             | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `expectedDate`                                                                                          | [Date](../types/rfcdate.md)                                                                             | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `currency`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `supplier`                                                                                              | [models.ApiPurchaseOrderListResponseSupplier](../models/api-purchase-order-list-response-supplier.md)   | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `warehouse`                                                                                             | [models.ApiPurchaseOrderListResponseWarehouse](../models/api-purchase-order-list-response-warehouse.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |