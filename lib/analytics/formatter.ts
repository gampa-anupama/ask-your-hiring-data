export function formatResult(result: any) {

    if (!Array.isArray(result)) {

        return String(result);

    }

    if (
        result.length &&
        "label" in result[0] &&
        "value" in result[0]
    ) {

        return result
            .map((r) => `${r.label}: ${r.value}`)
            .join("\n");

    }

    return JSON.stringify(result, null, 2);

}