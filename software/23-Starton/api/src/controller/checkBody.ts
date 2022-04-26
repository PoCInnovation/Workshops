export default function checkBody(parsedBody: any, targets: string[]) : boolean {
    let compt: number = 0;

    for (let value in parsedBody) {
        if (targets.indexOf(value) == -1)
            return false;
        compt++;
    }
    if (targets.length != compt)
        return false;
    return true;
}