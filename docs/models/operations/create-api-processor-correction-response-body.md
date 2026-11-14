# CreateApiProcessorCorrectionResponseBody

Committed resource or replay

## Example Usage

```typescript
import { CreateApiProcessorCorrectionResponseBody } from "lapyme/models/operations";

let value: CreateApiProcessorCorrectionResponseBody = {
  requestId: "<id>",
  data: {
    object: "processor_correction",
    id: "9b2fb705-20f7-47be-a067-bfbab74dd541",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `data`                                                                                                         | [operations.CreateApiProcessorCorrectionData](../../models/operations/create-api-processor-correction-data.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |