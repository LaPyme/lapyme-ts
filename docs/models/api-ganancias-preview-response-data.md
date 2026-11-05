# ApiGananciasPreviewResponseData

## Example Usage

```typescript
import { ApiGananciasPreviewResponseData } from "lapyme/models";

let value: ApiGananciasPreviewResponseData = {
  object: "supplier_payment_ganancias_preview",
  shouldWithhold: true,
  calculationBase: 773731,
  accumulatedBaseTotal: 131737,
  minimumNonTaxable: 519873,
  taxableAmount: 660355,
  rate: 2349.6,
  grossWithholding: 929528,
  previousWithholdings: 632835,
  netWithholding: 153142,
  minimumThreshold: 234304,
  finalWithholding: 383578,
  supplierName: "<value>",
  isInscriptoEnGanancias: true,
  personType: "FISICA",
  breakdown: [
    {
      label: "<value>",
      value: 4895.21,
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `object`                                                                 | *"supplier_payment_ganancias_preview"*                                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `shouldWithhold`                                                         | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `exemptReason`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `calculationBase`                                                        | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `accumulatedBaseTotal`                                                   | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `minimumNonTaxable`                                                      | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `taxableAmount`                                                          | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `rate`                                                                   | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `grossWithholding`                                                       | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `previousWithholdings`                                                   | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `netWithholding`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `minimumThreshold`                                                       | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `finalWithholding`                                                       | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `supplierName`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `isInscriptoEnGanancias`                                                 | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `personType`                                                             | [models.PersonType](../models/person-type.md)                            | :heavy_check_mark:                                                       | N/A                                                                      |
| `breakdown`                                                              | [models.Breakdown](../models/breakdown.md)[]                             | :heavy_check_mark:                                                       | N/A                                                                      |
| `progressiveScaleDetails`                                                | [models.ProgressiveScaleDetails](../models/progressive-scale-details.md) | :heavy_minus_sign:                                                       | N/A                                                                      |