# UpdateApiProductResponse

## Example Usage

```typescript
import { UpdateApiProductResponse } from "lapyme/models/operations";

let value: UpdateApiProductResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      product: {
        id: "3b251ab7-591c-4160-9a4b-d21004081204",
        name: "<value>",
        description: "proliferate abaft emulsify awkwardly",
        category: {
          id: "0ca2b4ee-8226-4d71-9e03-3756803e332d",
          name: "<value>",
        },
        sku: "<value>",
        barcode: "<value>",
        currency: "Iranian Rial",
        cost: 9565.39,
        price: 6865.86,
        taxRate: {
          id: 8856.52,
          value: 3437.78,
        },
        defaultSupplier: {
          id: "e6d657b6-b8d3-431e-a376-5f367d4428a4",
          name: "<value>",
        },
        productType: "combo",
        isActive: false,
        organizationSlug: "<value>",
        createdAt: new Date("2025-06-09T00:42:49.375Z"),
        updatedAt: new Date("2025-11-11T10:16:47.672Z"),
        object: "product",
        variantGroupId: "12e57348-88dc-449a-9047-85ff63c9db8d",
        variantOptions: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
        isExempt: true,
        stockSummary: {
          totalQuantity: 7699.6,
          warehouseCount: 907628,
          byWarehouse: [],
        },
      },
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.ApiProductUpdateResponse](../../models/api-product-update-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |