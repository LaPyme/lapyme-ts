# PurchasesReportRequestDimensionFilters

Filtros por dimensión. Cada clave debe ser una dimensión filtrable para la fuente. También acepta product_metafield:<key> para campos personalizados select de producto y contact_metafield:<key> para campos personalizados select de contacto cuando la fuente lo soporta. El valor es un array de IDs o valores a incluir.

## Example Usage

```typescript
import { PurchasesReportRequestDimensionFilters } from "lapyme/models";

let value: PurchasesReportRequestDimensionFilters = {};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `dueDate`               | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `accountDate`           | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `invoiceDate`           | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `supplier`              | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `supplierName`          | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `supplierTaxCategory`   | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `supplierProvince`      | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `supplierCity`          | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `variantSku`            | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `productName`           | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `product`               | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `category`              | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `subcategory`           | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `productType`           | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `warehouse`             | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `voucherType`           | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `currency`              | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `taxRate`               | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `purchaseInvoiceNumber` | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `paymentStatus`         | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `purchaseStatus`        | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `createdBy`             | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `purchaseOrigin`        | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `paymentTerm`           | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `paymentTermDays`       | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `supplierStatus`        | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `productStatus`         | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `warehouseStatus`       | *string*[]              | :heavy_minus_sign:      | N/A                     |