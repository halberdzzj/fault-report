export class user {
    id?: number;
    username: string;
    password: string;
    role?: string;
    status?: string;
}

export class report {
    report_id: number;
    user_id: number;
    title: string;
    description?: string;
    report_time: string;
    location: string;
    remark?: string;
}