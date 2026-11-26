# ApiSharedObjectf5eb0707b4

Datos del comprobante. document.due_date es el vencimiento operativo de la venta.

## Example Usage

```typescript
import { ApiSharedObjectf5eb0707b4 } from "lapyme/models";

let value: ApiSharedObjectf5eb0707b4 = {
  file: {
    status: "failed",
    url: "https://hospitable-fog.name/",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `file`                                                                                                                  | [models.ApiSharedObject9c9e4b0e0d](../models/api-shared-object9c9e4b0e0d.md)                                            | :heavy_check_mark:                                                                                                      | Document availability. The URL requires bearer authentication and never contains a storage path or signed query string. |
| `additionalProperties`                                                                                                  | Record<string, *any*>                                                                                                   | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |