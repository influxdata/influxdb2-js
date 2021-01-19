<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [Stack](./influxdb-client-apis.stack.md) &gt; [events](./influxdb-client-apis.stack.events.md)

## Stack.events property

<b>Signature:</b>

```typescript
events?: Array<{
        eventType?: string;
        name?: string;
        description?: string;
        sources?: string[];
        resources?: Array<{
            apiVersion?: string;
            resourceID?: string;
            kind?: TemplateKind;
            templateMetaName?: string;
            associations?: Array<{
                kind?: TemplateKind;
                metaName?: string;
            }>;
            links?: {
                self?: string;
            };
        }>;
        urls?: string[];
        readonly updatedAt?: string;
    }>;
```