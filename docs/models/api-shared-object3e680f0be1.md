# ApiSharedObject3e680f0be1

## Example Usage

```typescript
import { ApiSharedObject3e680f0be1 } from "lapyme/models";

let value: ApiSharedObject3e680f0be1 = {
  requestId: "<id>",
  effectiveScope: {
    circuitId: "33d39db2-6c1a-4393-928b-bdb81c8f9e7e",
    circuitName: "<value>",
  },
  data: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `effectiveScope`                                                                                     | *models.ApiSharedObject3e680f0be1EffectiveScope*                                                     | :heavy_check_mark:                                                                                   | Circuito sobre el que corrió el reporte: `all`, o el circuito pedido (`circuit_id` null es General). |
| `data`                                                                                               | Record<string, *any*>                                                                                | :heavy_check_mark:                                                                                   | N/A                                                                                                  |