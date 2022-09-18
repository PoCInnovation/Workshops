"use strict";
// From https://raw.githubusercontent.com/nikoskalogridis/deep-freeze/fb921b32064dce1645197be2bf975fe0385450b0/index.js
// which is sadly, no longer maintained
Object.defineProperty(exports, "__esModule", { value: true });
function deepFreeze(o) {
    if (o) {
        Object.freeze(o);
        Object.getOwnPropertyNames(o).forEach(function (prop) {
            if (o.hasOwnProperty(prop)
                && o[prop] !== null
                && (typeof o[prop] === 'object' || typeof o[prop] === 'function')
                && (o[prop].constructor !== Buffer)
                && !Object.isFrozen(o[prop])) {
                deepFreeze(o[prop]);
            }
        });
    }
    return o;
}
exports.deepFreeze = deepFreeze;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlZXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ZyZWV6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUhBQXVIO0FBQ3ZILHVDQUF1Qzs7QUFFdkMsU0FBZ0IsVUFBVSxDQUFFLENBQU07SUFDaEMsSUFBSSxDQUFDLEVBQUU7UUFDTCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO1lBQ2xELElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7bUJBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJO21CQUNoQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLENBQUM7bUJBQzlELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsS0FBSyxNQUFNLENBQUM7bUJBQ2hDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDNUIsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUVELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQWhCRCxnQ0FnQkM7QUFBQSxDQUFDIn0=