# MercadopagoRelease

## Example Usage

```typescript
import { MercadopagoRelease } from "lapyme/models/operations";

let value: MercadopagoRelease = {
  source: "mercadopago_release",
  bankAccountId: "8114f351-a699-4b05-9c93-b91d11c094e7",
  periodStart: new Date("2025-07-29"),
  periodEnd: new Date("2024-02-10"),
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `source`                       | *"mercadopago_release"*        | :heavy_check_mark:             | N/A                            |
| `bankAccountId`                | *string*                       | :heavy_check_mark:             | N/A                            |
| `periodStart`                  | [Date](../../types/rfcdate.md) | :heavy_check_mark:             | N/A                            |
| `periodEnd`                    | [Date](../../types/rfcdate.md) | :heavy_check_mark:             | N/A                            |