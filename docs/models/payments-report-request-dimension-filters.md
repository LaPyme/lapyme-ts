# PaymentsReportRequestDimensionFilters

Filtros por dimensión. Cada clave debe ser una dimensión filtrable para la fuente. También acepta product_metafield:<key> para campos personalizados select de producto y contact_metafield:<key> para campos personalizados select de contacto cuando la fuente lo soporta. El valor es un array de IDs o valores a incluir.

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
| `createdBy`                 | *string*[]                  | :heavy_minus_sign:          | N/A                         |
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
| `paymentContactStatus`      | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `pointOfSaleStatus`         | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `registerStatus`            | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `safeStatus`                | *string*[]                  | :heavy_minus_sign:          | N/A                         |
| `paymentMethodStatus`       | *string*[]                  | :heavy_minus_sign:          | N/A                         |