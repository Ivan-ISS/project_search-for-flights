export function sorting(arr: number[]) {
    const result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        let position = 0;
        while (position < result.length && arr[i] > +arr[position]) {
            position++;
        }
      
        // Вставляем оценку в порядке возрастания
        result.splice(position, 0, arr[i]);
    }
    return result;
}
