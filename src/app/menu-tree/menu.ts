
export interface MenuItem {
    id: number;
    refGroup: number;
    name: string;
    objectName: string;
    refMenuId: number | null;
    orderNum: number;
    type: string | null;
    menuPath: string;
    remarks: string | null;
    isActive: boolean;
    entDate: string;
    entUser: string | null;
    entTerm: string | null;
    updDate: string | null;
    updUser: string | null;
    updTerm: string | null;
    menuIcon: string;
    refGroupNavigation: any;
    tblRoleWiseMenu: any[];
}

