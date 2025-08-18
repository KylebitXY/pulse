import logging
import sys

import structlog

from app.core.config.settings import get_settings

settings = get_settings()


def configure_logging() -> None:
    timestamper = structlog.processors.TimeStamper(
        fmt="iso"
    )

    structlog.configure(
        processors=[
            structlog.contextvars.merge_contextvars,
            structlog.processors.add_log_level,
            timestamper,
            structlog.processors.JSONRenderer(),
        ],
        wrapper_class=structlog.make_filtering_bound_logger(
            logging.INFO
        ),
        context_class=dict,
        logger_factory=structlog.PrintLoggerFactory(
            file=sys.stdout
        ),
    )


logger = structlog.get_logger()