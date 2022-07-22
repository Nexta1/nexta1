type request = {
	name: string
	passwords: number
	isLock: boolean
	permissions: string[]
}
const message: request = {
	name: 'message',
	passwords: 798868370,
	isLock: true,
	permissions: ['store'],
}

const SourceDecorator = (keys: string[]): MethodDecorator => {
	return (
		target: Object,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) => {
		const method = descriptor.value
		const validate = ()=>keys.every(key =>message.permissions.includes(key))
		descriptor.value = () => {
			if (validate() && message.isLock==true) {
				return method()
			} else {
				alert('没有权限')
			}
		}
	}
}

class Source {
	use() {
		console.log('登录成功')
	}
	@SourceDecorator(['store','manage'])
	store(){
		console.log('保存文章');
	}
}

new Source().store()
