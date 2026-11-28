# CreateApiInventoryAssemblyRequest

## Example Usage

```typescript
import { CreateApiInventoryAssemblyRequest } from "lapyme/models/operations";

let value: CreateApiInventoryAssemblyRequest = {
  idempotencyKey: "<value>",
  body: {
    kitProductId: "5ed3330f-4681-4e19-92f2-14fa8790d0fd",
    warehouseId: "cf7d6aee-09f0-4a79-918e-8c9650314f64",
    quantity: 7046.97,
    type: "disassembly",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `idempotencyKey`                     | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `body`                               | *models.ApiInventoryAssemblyRequest* | :heavy_check_mark:                   | N/A                                  |