# WarehouseResponse

## Example Usage

```typescript
import { WarehouseResponse } from "lapyme/models";

let value: WarehouseResponse = {
  success: true,
  data: {
    id: "65de9c6f-b5ca-4730-a30c-1e24c29bfe8d",
    name: "<value>",
    address: "3328 Carlee Cliff",
    isDefault: true,
    isActive: false,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `success`                                                            | *true*                                                               | :heavy_check_mark:                                                   | N/A                                                                  |
| `data`                                                               | [models.WarehouseResponseData](../models/warehouse-response-data.md) | :heavy_check_mark:                                                   | N/A                                                                  |