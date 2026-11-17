# ApiSharedObject1923b260ad

## Example Usage

```typescript
import { ApiSharedObject1923b260ad } from "lapyme/models";

let value: ApiSharedObject1923b260ad = {
  requestId: "<id>",
  effectiveScope: "all",
  data: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `effectiveScope`                                                                                     | *models.ApiSharedObject1923b260adEffectiveScope*                                                     | :heavy_check_mark:                                                                                   | Circuito sobre el que corrió el reporte: `all`, o el circuito pedido (`circuit_id` null es General). |
| `data`                                                                                               | Record<string, *any*>                                                                                | :heavy_check_mark:                                                                                   | N/A                                                                                                  |