# ApiInventoryAssemblyRequestAssembly

## Example Usage

```typescript
import { ApiInventoryAssemblyRequestAssembly } from "lapyme/models";

let value: ApiInventoryAssemblyRequestAssembly = {
  kitProductId: "bc289173-80e5-463f-b364-aa70f5d3d2d5",
  warehouseId: "96d516b5-5a05-4ba5-a5e7-8e3ca52ccdbc",
  quantity: 1210.75,
  type: "assembly",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `kitProductId`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `warehouseId`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `quantity`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `notes`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `componentLots`                                                                | [models.ApiSharedObject7b350f629a](../models/api-shared-object7b350f629a.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `type`                                                                         | *"assembly"*                                                                   | :heavy_check_mark:                                                             | N/A                                                                            |