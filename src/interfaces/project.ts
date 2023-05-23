export interface ProjectType {
    address:{
        full_address:string,
        country:string,
        city:string,
        state:string,
        longitude:string,
        langitude:string,
        zip_code: string
    },
    allowed_for_merchant:boolean,
    boxes_images:string,
    description:string,
    id:string,
    images:string,
    impact_and_benefits:string,
    name:string,
    price_per_tone_usd:string,
    project_developer:string,
    type:string,
}
