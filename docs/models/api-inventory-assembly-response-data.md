# ApiInventoryAssemblyResponseData

## Example Usage

```typescript
import { ApiInventoryAssemblyResponseData } from "lapyme/models";

let value: ApiInventoryAssemblyResponseData = {
  object: "inventory_assembly",
  id: "e73a44f9-6293-4d4e-8ec5-4b13fef05ec1",
  batchCode: "<value>",
  kitProductId: "04366d55-ce8b-499e-9ba2-9f020a98ec33",
  kitName: "<value>",
  warehouseId: "52d6624a-f5c1-40a5-868d-7d3b49c229ff",
  type: "assembly",
  quantity: 5862.58,
  assembledAt: new Date("2026-04-29T06:20:14.688Z"),
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
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `object`                                                                                       | *"inventory_assembly"*                                                                         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `batchCode`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `kitProductId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `kitName`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `warehouseId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [models.ApiInventoryAssemblyResponseType](../models/api-inventory-assembly-response-type.md)   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `quantity`                                                                                     | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `assembledAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `idempotentReplay`                                                                             | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `items`                                                                                        | [models.ApiInventoryAssemblyResponseItem](../models/api-inventory-assembly-response-item.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |