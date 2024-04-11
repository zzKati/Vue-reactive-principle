function autorun(fn) {
    window.__fun = fn
    fn()
    window.__fun = null
}

// 监听对象的属性
function observe(obj) {
    for (const key in obj) {
        let internalValue = obj[key]
        const funs = new Set()

        if (typeof internalValue === 'object') {
            observe(internalValue)
        }
        Object.defineProperty(obj, key, {
            get() {
                // 收集依赖
                if (window.__fun) {
                    funs.add(window.__fun)
                }
                return internalValue
            },
            set(value) {
                // 派发更新
                internalValue = value
                funs.forEach(fn => fn())
            }
        })
    }
}