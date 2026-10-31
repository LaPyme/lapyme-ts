# FiscalDocument

Comprobante ya emitido: verifica FECompConsultar y registra sin autorizar ni cambiar numeración. Fecha contable = issue_date. Incompatibilidades: 422; ARCA no disponible: 503 reintentable.

## Example Usage

```typescript
import { FiscalDocument } from "lapyme/models";

let value: FiscalDocument = {
  voucherType: 553351,
  pointOfSaleNumber: 395686,
  voucherNumber: 293001,
  cae: "<value>",
  caeExpiry: new Date("2024-10-01"),
  issueDate: new Date("2024-08-21"),
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `voucherType`               | *number*                    | :heavy_check_mark:          | N/A                         |
| `pointOfSaleNumber`         | *number*                    | :heavy_check_mark:          | N/A                         |
| `voucherNumber`             | *number*                    | :heavy_check_mark:          | N/A                         |
| `cae`                       | *string*                    | :heavy_check_mark:          | N/A                         |
| `caeExpiry`                 | [Date](../types/rfcdate.md) | :heavy_check_mark:          | N/A                         |
| `issueDate`                 | [Date](../types/rfcdate.md) | :heavy_check_mark:          | N/A                         |