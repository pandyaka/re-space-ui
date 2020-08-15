interface Space {
    id: string;
    name: string;
    mall: any;
    size: number;
    shape: string;
    price: number;
    allowed_tenant_type: string[];
    image_url: string[];
}

export default Space;
