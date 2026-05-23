# PaymentsReportRequestDimensionFilters

Filtros por dimensión. Cada clave debe ser una dimensión filtrable para la fuente. El valor es un array de IDs o valores a incluir.

## Example Usage

```typescript
import { PaymentsReportRequestDimensionFilters } from "lapyme/models";

let value: PaymentsReportRequestDimensionFilters = {};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `paymentContact`            | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `paymentContactName`        | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `paymentContactTaxCategory` | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `paymentContactProvince`    | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `paymentContactCity`        | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `pointOfSale`               | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `register`                  | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `posSession`                | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `safe`                      | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `paymentType`               | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `paymentRecordStatus`       | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `currency`                  | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `settlementCurrency`        | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `formattedPaymentNumber`    | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `paymentMethod`             | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `paymentMethodType`         | *string*[]                  | :heavy_minus_sign:          | N/A                         |