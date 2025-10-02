from sqlalchemy import Column, String


class TenantMixin:
    tenant_id = Column(String, index=True)