# ApiSharedObject29aea9dac9

## Example Usage

```typescript
import { ApiSharedObject29aea9dac9 } from "lapyme/models";

let value: ApiSharedObject29aea9dac9 = {
  object: "stock_transfer",
  id: "a0c5c414-32af-412b-8352-1e53cc76dff4",
  organizationId: "0339bc26-2228-440a-ab00-85dd3be5a4b4",
  sourceWarehouseId: "61f8289e-452d-48b3-b457-ebb8538a28ce",
  targetWarehouseId: "3890884c-ae0d-4aa8-8b6a-fb3fed7a45b8",
  transferDate: new Date("2025-04-12T19:14:30.073Z"),
  notes: "<value>",
  status: "closed_with_difference",
  createdAt: new Date("2024-12-27T08:22:55.110Z"),
  updatedAt: new Date("2024-11-16T08:38:53.041Z"),
  createdBy: "d10d9a42-d9d8-4d28-8574-0579b7de8c27",
  updatedBy: "dc9a6187-51f8-45fe-81ec-c6878105c746",
  sourceWarehouse: {
    id: "7aa94cab-290a-4268-8749-e7435e10838d",
    name: "<value>",
  },
  targetWarehouse: {
    id: "e33fb221-93a9-4b25-83b1-4e9cce912575",
    name: "<value>",
  },
  items: [
    {
      id: "bc6c0f00-5d57-4482-a2b5-ef8c76fc95d0",
      productId: "71d87c70-d6e4-4d8d-bd30-8229d33c08a6",
      quantity: 658.07,
      receivedQuantity: 3113.64,
      rejectedQuantity: 6187.91,
      product: {
        id: "51a1e5d3-1df8-44a5-bb8d-026b7a1fe6ca",
        name: "<value>",
        sku: "<value>",
        productType: "product",
        variantOptions: {},
        optionNames: null,
      },
    },
  ],
  tags: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"stock_transfer"*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceWarehouseId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetWarehouseId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `transferDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.ApiSharedEnum736f0d077b](../models/api-shared-enum736f0d077b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceWarehouse`                                                                             | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetWarehouse`                                                                             | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObject0afbf8c23c](../models/api-shared-object0afbf8c23c.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | [models.ApiSharedObjected3905a55b](../models/api-shared-objected3905a55b.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |