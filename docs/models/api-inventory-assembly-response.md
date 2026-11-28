# ApiInventoryAssemblyResponse

## Example Usage

```typescript
import { ApiInventoryAssemblyResponse } from "lapyme/models";

let value: ApiInventoryAssemblyResponse = {
  requestId: "<id>",
  data: {
    object: "inventory_assembly",
    id: "327c4c09-2c3b-4893-8c8e-8c75b96b5acd",
    batchCode: "<value>",
    kitProductId: "61e79720-6daa-4d25-8770-ddacf3fe0bff",
    kitName: "<value>",
    warehouseId: "31a72bb3-4695-4343-964b-5d70274ecff9",
    type: "disassembly",
    quantity: 4253.92,
    assembledAt: new Date("2024-03-29T05:47:44.397Z"),
    idempotentReplay: false,
    items: [
      {
        productId: "f30980b2-14a7-4ae9-9749-d0123a340412",
        lots: [
          {
            lotId: "2343a648-57d5-47ab-97e7-294910fa8f5f",
            code: "<value>",
            unresolvedCode: "<value>",
            quantity: 1340.92,
            expirationDate: new Date("2024-12-26"),
            productId: "99a5fe65-93d8-4d69-8994-c14564b9f9c3",
            movementType: "<value>",
          },
        ],
      },
    ],
  },
  warnings: [
    {
      code: "numbers_ignored_printed_on_invoice",
      productId: "06bd9b7c-4a44-49b8-aa66-ed989bd248ea",
      warehouseId: "efbf58f0-b45a-48aa-be96-1725151ae5bd",
      quantity: 770.46,
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `requestId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [models.ApiInventoryAssemblyResponseData](../models/api-inventory-assembly-response-data.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `warnings`                                                                                   | *models.ApiInventoryAssemblyResponseWarning*[]                                               | :heavy_check_mark:                                                                           | N/A                                                                                          |